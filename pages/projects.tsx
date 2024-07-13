import React from 'react';
import { useEffect, useState } from 'react';
import type { NextPage } from 'next';
import api from '../lib/config';
import { projectProps } from '../lib/api';
import Page from '../components/Page';
import ButtonInternal from '../components/Buttons/ButtonInternal';

const calendarPage: NextPage = () => {
  const [projects, setProjects] = useState<projectProps[]>([]);
  const [isLoadingProjects, setIsLoadingProjects] = useState(false);

  useEffect(
    () => {
      const getProjects = async () => {
        try {
          setIsLoadingProjects(true);
          const fetchedData = [];
          const { data } = await api.get(
            'projects?pagination[page]=1&pagination[pageSize]=10&sort[0]=id:desc'
          );
          fetchedData.push(...data?.data);
          if (
            data?.meta?.pagination &&
            fetchedData.length > 0 &&
            data?.meta?.pagination.page < data?.meta?.pagination.pageCount
          ) {
            const { page, pageCount } = data?.meta?.pagination;
            for (let i = page + 1; i <= pageCount; i++) {
              let response = await api.get(
                `projects?pagination[page]=${i}&pagination[pageSize]=10&sort[0]=id:desc`
              );
              fetchedData.push(...response.data.data);
            };
          };
          setProjects(fetchedData);
        } catch (error: any) {
          if (error?.response?.data) {
            console.error(error?.response?.data.error?.message);
          };
        } finally {
          setIsLoadingProjects(false);
        };
      };

      getProjects();
    }, []
  );

  return (
    <Page
      title='Projects - Ariadne Antipa'
      description='AriadneAntipa.com is the official website for Ariadne Antipa - Pianist, Educator, and Conductor'
      url='projects'
      image=''
    >
      <>
        <h1>Projects</h1>
        {isLoadingProjects ? (
          <h2 className='mt-12'>Loading Projects...</h2>
        ) : (
          (projects ? (
            <section
              className='mt-12 flex flex-col gap-12 justify-center align-middle items-center text-center'
              id='projects-list'
            >
              {projects.map((project) => (
                <ButtonInternal
                  className='max-w-[600px] w-full'
                  href={`project/${project.attributes.Name}?id=${project.id}`}
                  title={project.attributes.Name}>
                  <article
                    key={project.attributes.Name}
                  >
                    <h3 className='py-2 font-bold text-3xl max-sm:hyphens-auto'>{project.attributes.Name}</h3>
                  </article>
                </ButtonInternal>
              ))}
            </section>
          ) : '')
        )}
      </>
    </Page>
  );
};

export default calendarPage;