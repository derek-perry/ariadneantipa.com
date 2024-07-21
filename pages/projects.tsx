import React from 'react';
import { useEffect, useState } from 'react';
import type { NextPage } from 'next';
import api from '../lib/config';
import { projectProps } from '../lib/api';
import Page from '../components/Page';
import ItemProject from '../components/Items/ItemProject';

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
          const uniqueFetchedData = fetchedData.filter((item, index, self) =>
            index === self.findIndex((t) => (
              t.id === item.id
            ))
          );
          setProjects(uniqueFetchedData);
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
      description='Ariadne Antipa is a pianist, conductor, and educator residing in Cincinnati, Ohio. She is recognized for her creative programming and exquisitely played concerts.'
      url='projects'
      image=''
      classNameMain='!px-0'
    >
      <>
        <h1 className='px-8'>Projects</h1>
        {isLoadingProjects ? (
          <h2 id='loading-projects' className='mt-12 px-8'>Loading Projects...</h2>
        ) : (
          (projects && projects.length ? (
            <section
              className='w-full mt-12 flex flex-col gap-6 justify-center align-middle items-center text-center'
              id='projects-list'
            >
              {projects.map((project) => (
                <ItemProject
                  key={project.attributes.Name}
                  id={project.id.toString()}
                  Name={project.attributes.Name}
                  Description={project.attributes.Description}
                />
              ))}
            </section>
          ) : '')
        )}
      </>
    </Page>
  );
};

export default calendarPage;