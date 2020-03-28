import React from 'react';
import Grid from '@material-ui/core/Grid';
import { Image } from '../../platform/Projects/types';
import SinglePicture from '../SinglePicture';
import Container from '../Container';

const LargePicture: React.FC<Image> = ({ altText, imgPath }) => (
  <Container>
    <Grid container>
      <Grid item xs={12}>
        <SinglePicture altText={altText} image={imgPath} />
      </Grid>
    </Grid>
  </Container>
);

export default LargePicture;
