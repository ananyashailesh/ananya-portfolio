import { Footer } from '~/components/footer';
import {
  ProjectContainer,
  ProjectHeader,
  ProjectSection,
  ProjectSectionContent,
  ProjectSectionHeading,
  ProjectSectionText,
  ProjectTextRow,
} from '~/layouts/project';
import { Fragment } from 'react';
import { baseMeta } from '~/utils/meta';

const title = 'Guardian Bot';
const description =
  'A ROS-based assistive robot for elderly care, combining autonomous person-following, wearable IoT health monitoring, and automated emergency response.';
const roles = ['Robotics', 'Computer Vision', 'IoT Integration'];

export const meta = () => {
  return baseMeta({ title, description, prefix: 'Projects' });
};

export const GuardianBot = () => {
  return (
    <Fragment>
      <ProjectContainer>
        <ProjectHeader
          title={title}
          description={description}
          linkLabel="View on GitHub"
          url="https://github.com/ananyashailesh"
          roles={roles}
        />
        <ProjectSection>
          <ProjectSectionContent>
            <ProjectTextRow>
              <ProjectSectionHeading>The problem</ProjectSectionHeading>
              <ProjectSectionText>
                Elderly people living alone are at risk from falls and medical
                emergencies going unnoticed. We wanted to explore whether a mobile robot
                could act as a companion that watches out for its owner without being
                intrusive — following them around the home and reacting quickly if
                something goes wrong.
              </ProjectSectionText>
            </ProjectTextRow>
          </ProjectSectionContent>
        </ProjectSection>
        <ProjectSection light>
          <ProjectSectionContent>
            <ProjectTextRow>
              <ProjectSectionHeading>Building the robot</ProjectSectionHeading>
              <ProjectSectionText>
                Guardian Bot is built on ROS and simulated in Gazebo, using OpenCV for
                real-time person detection and tracking so the robot can autonomously
                follow its owner through a space. A wearable IoT device streams health
                data back to the robot, which can trigger an automated emergency
                response — alerting a caregiver — if it detects a fall or an
                abnormal reading.
              </ProjectSectionText>
              <ProjectSectionText>
                Co-developed with a teammate, the project combines robotics, computer
                vision, and IoT into a single pipeline: track the person, monitor their
                vitals, and respond fast when something looks wrong.
              </ProjectSectionText>
            </ProjectTextRow>
          </ProjectSectionContent>
        </ProjectSection>
        <ProjectSection>
          <ProjectSectionContent>
            <ProjectTextRow>
              <ProjectSectionHeading>Results</ProjectSectionHeading>
              <ProjectSectionText>
                In simulation, Guardian Bot achieved 95.2% tracking accuracy and a 92.1%
                true-positive rate for fall detection, with emergency response triggered
                in under 5 seconds. The work was later extended into a co-authored
                research paper on real-time anomaly detection, presented at IEEE CINS
                2025 in Dubai.
              </ProjectSectionText>
            </ProjectTextRow>
          </ProjectSectionContent>
        </ProjectSection>
      </ProjectContainer>
      <Footer />
    </Fragment>
  );
};
