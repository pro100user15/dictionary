import React from 'react';
import Typography from '@mui/material/Typography';

const AboutPage = () => {
  return (
    <div style={styles.container}>
      <Typography variant="h3" component="div" style={styles.heading}>
        About Our Website
      </Typography>
      <Typography style={styles.paragraph}>
        Dictionary is a leading online platform for learning and expanding your vocabulary in the
        some language. We provide a wide range of resources and tools to cater to various language
        learning needs.
      </Typography>
      <Typography style={styles.paragraph}>
        Our goal is to create an immersive learning experience for our users. We continuously update
        and enhance our offerings to provide you with a plethora of options for an enjoyable and
        engaging learning journey.
      </Typography>
      <Typography style={styles.paragraph}>
        Whether you are a beginner looking to grasp the basics or an advanced learner aiming to
        refine your vocabulary skills, WordMaster has you covered. Our comprehensive dictionary
        offers a vast collection of words, their meanings, synonyms, and usage examples, allowing
        you to explore and understand the English language in depth.
      </Typography>
      <Typography style={styles.paragraph}>
        Additionally, we offer various interactive features, such as quizzes, word games, and
        sentence construction exercises, to make your learning process more dynamic and enjoyable.
        Our platform is designed to be user-friendly and accessible, ensuring that learners of all
        levels can benefit from our resources.
      </Typography>
      <Typography style={styles.paragraph}>
        Join WordMaster today and embark on an exciting journey to expand your vocabulary, improve
        your language skills, and enhance your overall communication abilities in some language.
      </Typography>
    </div>
  );
};

const styles = {
  container: {
    maxWidth: '1000px',
    margin: '0 auto',
    padding: '40px'
  },
  heading: {
    fontWeight: 'bold',
    marginBottom: '20px',
    textAlign: 'center'
  },
  imageContainer: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
    gridGap: '20px',
    marginBottom: '20px'
  },
  image: {
    maxWidth: '100%',
    height: 'auto'
  },
  paragraph: {
    fontSize: '20px',
    marginBottom: '16px'
  },
  subheading: {
    fontWeight: 'bold',
    marginBottom: '16px'
  },
  valueList: {
    fontSize: '20px',
    listStyle: 'disc',
    paddingLeft: '20px'
  }
};

export default AboutPage;
