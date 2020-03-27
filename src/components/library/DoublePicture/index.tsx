import React from 'react';
import Grid from '@material-ui/core/Grid';
import Container from '../Container';
import SinglePicture from '../SinglePicture';
import { Image } from '../../platform/Projects/types';

interface DoublePictureProps {
  image1: Image;
  image2: Image;
}

const DoublePicture: React.FC<DoublePictureProps> = ({ image1, image2 }) => {
  return (
    <React.Fragment>
      <Container>
        <Grid container>
          <Grid item sm={6} xs={12}>
            <SinglePicture altText={image1?.altText} image={image1?.imgPath} />
          </Grid>
          <Grid item sm={6} xs={12}>
            <SinglePicture altText={image2?.altText} image={image2?.imgPath} />
          </Grid>
        </Grid>
      </Container>
    </React.Fragment>
  );
};

export default DoublePicture;
