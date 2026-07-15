import { Footer } from '~/components/footer';
import { Link } from '~/components/link';
import { List, ListItem } from '~/components/list';
import {
  ProjectContainer,
  ProjectHeader,
  ProjectSection,
  ProjectSectionContent,
  ProjectSectionHeading,
  ProjectSectionText,
  ProjectTextRow,
} from '~/layouts/project';
import { baseMeta } from '~/utils/meta';
import styles from './uses.module.css';

export const meta = () => {
  return baseMeta({
    title: 'Uses',
    description: 'A list of languages, frameworks, and tools I use to build things',
  });
};

export const Uses = () => {
  return (
    <>
      <ProjectContainer className={styles.uses}>
        <ProjectHeader
          title="Uses"
          description="A rundown of the languages, frameworks, and tools I reach for most when building software, from AI/ML work to full-stack apps and robotics."
        />
        <ProjectSection padding="none" className={styles.section}>
          <ProjectSectionContent>
            <ProjectTextRow width="m">
              <ProjectSectionHeading>Languages</ProjectSectionHeading>
              <ProjectSectionText as="div">
                <List>
                  <ListItem>
                    Python is my go-to for AI/ML work, backend services, and robotics —
                    from NL-to-SQL pipelines to ROS nodes.
                  </ListItem>
                  <ListItem>
                    C# and .NET for building admin workflows and streaming services, like
                    the Blazor Server and SignalR apps I've worked on at Dell.
                  </ListItem>
                  <ListItem>
                    JavaScript/TypeScript for front-end work, mainly with React, plus
                    Dart when I'm building mobile apps in Flutter.
                  </ListItem>
                  <ListItem>Java, C, C++, R, and MATLAB round out my coursework and robotics toolkit.</ListItem>
                </List>
              </ProjectSectionText>
            </ProjectTextRow>
          </ProjectSectionContent>
        </ProjectSection>
        <ProjectSection padding="none" className={styles.section}>
          <ProjectSectionContent>
            <ProjectTextRow width="m">
              <ProjectSectionHeading>Frameworks & libraries</ProjectSectionHeading>
              <ProjectSectionText as="div">
                <List>
                  <ListItem>
                    <Link href="https://reactjs.org/">React</Link> and{' '}
                    <Link href="https://nodejs.org/">Node.js</Link> for full-stack web
                    apps, and Flutter for mobile.
                  </ListItem>
                  <ListItem>
                    TensorFlow, PyTorch, and scikit-learn for machine learning work,
                    alongside NumPy and Pandas for data wrangling.
                  </ListItem>
                  <ListItem>
                    OpenCV for computer vision, used in projects like Guardian Bot for
                    real-time person tracking.
                  </ListItem>
                  <ListItem>.NET for backend services and internal tooling at Dell.</ListItem>
                </List>
              </ProjectSectionText>
            </ProjectTextRow>
          </ProjectSectionContent>
        </ProjectSection>
        <ProjectSection padding="none" className={styles.section}>
          <ProjectSectionContent>
            <ProjectTextRow width="m">
              <ProjectSectionHeading>Tools</ProjectSectionHeading>
              <ProjectSectionText as="div">
                <List>
                  <ListItem>
                    Git for version control, day to day across every project.
                  </ListItem>
                  <ListItem>Docker for containerizing and shipping services.</ListItem>
                  <ListItem>
                    MySQL, MongoDB, and Firebase depending on what a project needs —
                    relational, document, or realtime.
                  </ListItem>
                  <ListItem>Linux as my daily development environment.</ListItem>
                </List>
              </ProjectSectionText>
            </ProjectTextRow>
          </ProjectSectionContent>
        </ProjectSection>
      </ProjectContainer>
      <Footer />
    </>
  );
};
