import { GetServerSideProps, NextPage } from 'next';
import { ToWords } from 'to-words';
import { apiGetProject, projectProps } from '../../lib/api';
import Page from '../../components/Page';
import LinkInternal from '../../components/Links/LinkInternal';

const toWords = new ToWords({
  localeCode: 'en-US',
  converterOptions: {
    currency: false,
    ignoreDecimal: false,
    ignoreZeroCurrency: false
  }
});

interface IProjectPageProps {
  project: projectProps;
  prevUrl: string | undefined;
};

const ProjectPage: NextPage<IProjectPageProps> = ({ project, prevUrl }) => {
  const checkNumberName = (dirtyName: string) => {
    let parsedName = parseInt(dirtyName);
    if (isNaN(parsedName)) {
      return dirtyName;
    } else {
      let words = toWords.convert(parsedName);
      return encodeURIComponent(words);
    };
  };

  function stringWithLineBreaks(inputString: string) {
    var outputString = inputString.toString().replace(/(?:\r\n|\r|\n)/g, '<br />');
    return outputString;
  };

  return (
    <>
      {project && project.attributes.Name ? (
        <Page
          title={`${project.attributes.Name} - Ariadne Antipa`}
          description={project.attributes.SEODescription ? project.attributes.SEODescription : 'AriadneAntipa.com is the official website for Ariadne Antipa - Pianist, Educator, and Conductor'}
          url={`project/${checkNumberName(project.attributes.Name)}`}
          image={project.attributes.Image?.data ? project.attributes.Image.data?.attributes.url : ``}
        >
          <article
            className='max-w-[1000px]'
            id={checkNumberName(project.attributes.Name)}
          >
            {prevUrl && (prevUrl === 'http://localhost:3000/projects' || prevUrl === 'https://ariadneantipa.netlify.app/projects' || prevUrl === 'https://ariadneantipa.com/projects') ? (
              <div
                className='mb-8'
              >
                <LinkInternal
                  title='Back to Projects'
                  href='projects'
                >
                  &larr; Back to Projects
                </LinkInternal>
              </div>
            ) : (
              ((prevUrl === 'http://localhost:3000/' || prevUrl === 'https://ariadneantipa.netlify.app/' || prevUrl === 'https://ariadneantipa.com/') ? (
                <div
                  className='mb-8'
                >
                  <LinkInternal
                    title='Back'
                    href='/'
                  >
                    &larr; Back
                  </LinkInternal>
                </div>
              ) : '')
            )}
            <h1 className='mb-4 max-sm:hyphens-auto'>{project.attributes.Name}</h1>
            <p className='mt-4 max-sm:hyphens-auto text-left' dangerouslySetInnerHTML={{ __html: stringWithLineBreaks(project.attributes.Description) }} />
          </article>
        </Page>
      ) :
        (
          <Page
            title='Project Not Found - Ariadne Antipa'
            description='AriadneAntipa.com is the official website for Ariadne Antipa - Pianist, Educator, and Conductor'
            url='project/not-found'
            image=''
          >
            <article
              className='max-w-[680px]'
              id='project-not-found'
            >
              <h1 className='mb-4 max-sm:hyphens-auto'>Error 404: Project Not Found</h1>
              <p className='mt-2 max-sm:hyphens-auto text-2xl'>The project you are looking for has moved, is no longer available, has been archived, or was not valid.</p>
            </article>
          </Page>
        )}
    </>
  );
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  try {
    const response = await apiGetProject.get(
      (context?.query?.id as string) || '0'
    );
    return {
      props: {
        project: response.data.data,
        prevUrl: context.req.headers.referer ?? ''
      }
    };
  } catch (e) {
    return {
      props: {
        project: null,
        prevUrl: context.req.headers.referer ?? ''
      }
    };
  };
};

export default ProjectPage;
