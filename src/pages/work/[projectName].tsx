import React from 'react';
import {useRouter} from 'next/router';
import { useQuery } from '@apollo/react-hooks';
import { BasePage } from '../../components/platform/BasePage';
import PageHeader from '../../components/platform/PageHeader';
import SingleProjectQuery from '../../queries/SingleProjectQuery';
import PullSection from '../../components/library/PullSection';
import DoublePicture from '../../components/library/DoublePicture';

const ProjectTemplate: React.FC = () => {
  const {query} = useRouter();
  const { data } = useQuery(SingleProjectQuery, {variables:{getter: `/${query.projectName}`}});
  const project = data?.project;
  console.log(data)
  return(
    <BasePage>
      <PageHeader h1={project?.companyName} h2={project?.projectHeading} image={project?.bgImage} />
      <PullSection
        body={project?.challenge}
        header={project?.challengeHeading}
      />

      <DoublePicture image1={project?.challenge01} image2={project?.challenge02}/>
      <PullSection body={project?.approach} header={project?.approachHeading}/>
      <DoublePicture image1={project?.process01} image2={project?.process02}/>
      <PullSection body={project?.outcome} header={project?.outcomeHeading}/>
      {/*<LargePicture imgPath={project.outcome01.imgPath} altText={project.outcome01.altText}/>*/}

    </BasePage>
  );
};


export default ProjectTemplate;