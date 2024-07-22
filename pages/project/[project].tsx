import { GetServerSideProps, NextPage } from 'next';
import { ToWords } from 'to-words';
import { apiGetProject, projectProps } from '../../lib/api';
import Page from '../../components/Page';

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

  function markdownToHtml(content: string): string {
    // Convert headers to HTML <h> tags with ids
    content = content.replace(/^(#+)\s+(.*)$/gm, (match, hashes, headerText) => {
      const level = hashes.length;
      const id = headerText.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
      return `<h${level} id='${id}'>${headerText}</h${level}>`;
    });

    // Convert bold text (**text** or __text__)
    content = content.replace(/\*\*(.*?)\*\*|__(.*?)__/g, '<strong>$1$2</strong>');

    // Convert italic text (*text* or _text_)
    content = content.replace(/\*(.*?)\*|_(.*?)_/g, '<em>$1$2</em>');

    // Convert links ([text](url))
    content = content.replace(/\[([^\]]+)\]\((.*?)\)/g, '<a href="$2">$1</a>');

    // Convert line breaks to <br> tags
    content = content.replace(/(?:\r\n|\r|\n)/g, '<br />');

    return content;
  };

  return (
    <>
      {project && project.attributes.Name ? (
        <Page
          title={`${project.attributes.Name} - Ariadne Antipa`}
          description={project.attributes.SEODescription ? project.attributes.SEODescription : 'Ariadne Antipa is a pianist, conductor, and educator residing in Cincinnati, Ohio. She is recognized for her creative programming and exquisitely played concerts.'}
          url={`project/${checkNumberName(project.attributes.Name)}`}
          image={project.attributes.Image?.data ? project.attributes.Image.data?.attributes.url : ``}
          prevUrl={prevUrl ? prevUrl : ''}
        >
          <article
            className='max-w-[1000px] w-full'
            id={checkNumberName(project.attributes.Name)}
          >
            <h1 className='mb-4'>{project.attributes.Name}</h1>
            <p className='mt-4 text-left' dangerouslySetInnerHTML={{ __html: markdownToHtml(project.attributes.Content) }} />
          </article>
        </Page>
      ) :
        (
          <Page
            title='Project Not Found - Ariadne Antipa'
            description='Ariadne Antipa is a pianist, conductor, and educator residing in Cincinnati, Ohio. She is recognized for her creative programming and exquisitely played concerts.'
            url='project/not-found'
            image=''
          >
            <article
              className='max-w-[680px]'
              id='project-not-found'
            >
              <h1 className='mb-4'>Error 404: Project Not Found</h1>
              <p className='mt-2 text-2xl'>The project you are looking for has moved, is no longer available, has been archived, or was not valid.</p>
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
