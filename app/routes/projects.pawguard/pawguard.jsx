import pawGif from '~/assets/paw.gif';
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
import styles from './pawguard.module.css';

const title = 'PawGuard';
const description =
  'A mobile app connecting users with animal shelters, veterinarians, and rescue teams, with real-time location tracking and secure donations.';
const roles = ['Mobile Development', 'Backend Integration', 'Product Design'];

export const meta = () => {
  return baseMeta({ title, description, prefix: 'Projects' });
};

export const PawGuard = () => {
  return (
    <Fragment>
      <ProjectContainer>
        <ProjectHeader
          title={title}
          description={description}
          linkLabel="View on GitHub"
          url="https://github.com/ChauhanKrish4763/Pawguard"
          roles={roles}
        />
        <ProjectSection>
          <ProjectSectionContent>
            <img className={styles.gif} src={pawGif} alt="PawGuard app in use" />
          </ProjectSectionContent>
        </ProjectSection>
        <ProjectSection>
          <ProjectSectionContent>
            <ProjectTextRow>
              <ProjectSectionHeading>The problem</ProjectSectionHeading>
              <ProjectSectionText>
                Reporting a stray or injured animal usually means figuring out who to
                call, whether it's a shelter, a vet, or a rescue team, often with no
                clear way to share a location or follow up. PawGuard sets out to connect
                the people who find animals in need with the people equipped to help
                them, in one app.
              </ProjectSectionText>
            </ProjectTextRow>
          </ProjectSectionContent>
        </ProjectSection>
        <ProjectSection light>
          <ProjectSectionContent>
            <ProjectTextRow>
              <ProjectSectionHeading>Building the app</ProjectSectionHeading>
              <ProjectSectionText>
                Built with Flutter and Firebase, PawGuard lets users report animals with
                real-time location tracking via the Google Maps API, browse adoption
                profiles from partner shelters, and securely donate to rescue efforts.
                Firebase handles authentication and data sync, keeping shelters,
                veterinarians, and rescue teams working from the same live information.
              </ProjectSectionText>
            </ProjectTextRow>
          </ProjectSectionContent>
        </ProjectSection>
        <ProjectSection>
          <ProjectSectionContent>
            <ProjectTextRow>
              <ProjectSectionHeading>Outcomes</ProjectSectionHeading>
              <ProjectSectionText>
                PawGuard gives shelters and rescue teams a faster path from a spotted
                animal to a response, while giving everyday users adoption profiles and
                donation tools that make it easy to help beyond just reporting.
              </ProjectSectionText>
            </ProjectTextRow>
          </ProjectSectionContent>
        </ProjectSection>
      </ProjectContainer>
      <Footer />
    </Fragment>
  );
};
