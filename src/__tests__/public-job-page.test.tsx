import PublicJobPage, {
  getServerSideProps,
} from "@/pages/organizations/[organizationId]/jobs/[jobId]";

import { testData } from "@/testing/test-data";

import { appRender, screen } from "@/testing/test-utils";

const job = testData.jobs[0];
const organization = testData.organizations[0];

describe("Public Job Page", () => {
  it("should use getServerSideProps to fetch data", async () => {
    const { props } = await getServerSideProps({
      params: { organizationId: organization.id, jobId: job.id },
    } as any);

    expect(props.job).toEqual(job);
    expect(props.organization).toEqual(organization);
  });

  it("should render the job details", async () => {
    appRender(<PublicJobPage job={job} organization={organization} />);

    const jobPosition = screen.getByRole("heading", { name: job.position });
    const info = screen.getByText(job.info);

    expect(jobPosition).toBeInTheDocument();
    expect(info).toBeInTheDocument();
  });

  it("should render the not found message if the data does not exist", async () => {
    const { rerender } = appRender(<PublicJobPage job={null} organization={null} />);

    const notFoundMsg = screen.getByRole("heading", {
      name: /not found/i,
    });
    expect(notFoundMsg).toBeInTheDocument();

    rerender(<PublicJobPage job={job} organization={null} />);
    expect(notFoundMsg).toBeInTheDocument();

    rerender(<PublicJobPage job={null} organization={organization} />);
    expect(notFoundMsg).toBeInTheDocument();

    rerender(
      <PublicJobPage
        job={{
          ...job,
          organizationId: "invalid-id",
        }}
        organization={organization}
      />
    );
    expect(notFoundMsg).toBeInTheDocument();
  });
});
