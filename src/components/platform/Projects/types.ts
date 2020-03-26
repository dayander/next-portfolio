export interface Project {
  _id: string;
  projectName: string;
  companyName: string;
  projectHeading: string;
  challengeHeading: string;
  challenge: string;
  approachHeading: string;
  approach: string;
  outcomeHeading: string;
  outcome: string;
  tags: [string];
  headingImg: Image;
  address: string;
  getter: string;
  bgImage: string;
}

export interface Image {
  imgPath: string;
  altText: string;
}

export interface ProjectLinkProps {
  bgImage: string;
  getter: string;
  companyName: string;
  projectHeading: string;
}
