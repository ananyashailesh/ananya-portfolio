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

const title = 'Multi-Drone Ground Control System';
const description =
  'A cloud ground control system for coordinating fleets of drones, with live telemetry, an operator dashboard, and a local gateway bridging MAVLink to the cloud.';
const roles = ['Backend Development', 'Frontend Development', 'Systems Design'];

export const meta = () => {
  return baseMeta({ title, description, prefix: 'Projects' });
};

export const PolarisGcs = () => {
  return (
    <Fragment>
      <ProjectContainer>
        <ProjectHeader
          title={title}
          description={description}
          linkLabel="View on GitHub"
          url="https://github.com/PolarisGCS"
          roles={roles}
        />
        <ProjectSection>
          <ProjectSectionContent>
            <ProjectTextRow>
              <ProjectSectionHeading>The problem</ProjectSectionHeading>
              <ProjectSectionText>
                Coordinating multiple drones from a single interface is hard: operators
                need live telemetry from every aircraft, a way to manage fleets at scale,
                and a resilient link between the aircraft and the cloud. Most existing
                ground control tools are built for a single vehicle at a time.
              </ProjectSectionText>
            </ProjectTextRow>
          </ProjectSectionContent>
        </ProjectSection>
        <ProjectSection light>
          <ProjectSectionContent>
            <ProjectTextRow>
              <ProjectSectionHeading>Building the system</ProjectSectionHeading>
              <ProjectSectionText>
                PolarisGCS is built around a FastAPI backend with Redis pub/sub for
                distributing live telemetry, backed by PostgreSQL and TimescaleDB for
                time-series flight data. A React and TypeScript operator and admin
                dashboard consumes this data over WebSockets, giving operators a
                real-time view of every aircraft in the fleet.
              </ProjectSectionText>
              <ProjectSectionText>
                On the aircraft side, a PySide6 local gateway bridges MAVLink telemetry
                from each drone up to the cloud, allowing the system to support fleets of
                up to 150 drones without overwhelming any single connection.
              </ProjectSectionText>
            </ProjectTextRow>
          </ProjectSectionContent>
        </ProjectSection>
        <ProjectSection>
          <ProjectSectionContent>
            <ProjectTextRow>
              <ProjectSectionHeading>Outcomes</ProjectSectionHeading>
              <ProjectSectionText>
                The result is a cloud GCS that gives operators live visibility into large
                drone fleets from a browser, with the local gateway handling the
                low-level MAVLink bridging so the cloud stack only ever deals with clean,
                structured telemetry.
              </ProjectSectionText>
            </ProjectTextRow>
          </ProjectSectionContent>
        </ProjectSection>
      </ProjectContainer>
      <Footer />
    </Fragment>
  );
};
