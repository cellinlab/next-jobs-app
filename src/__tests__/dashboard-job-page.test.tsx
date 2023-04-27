import DashboardJobPage from "@/pages/dashboard/jobs/[jobId]";

import { testData } from "@/testing/test-data";

import { appRender, screen, waitforLoadingToFinish } from "@/testing/test-utils";

const job = testData.jobs[0];

const router = {
  query: {
    jobId: job.id,
  },
};

jest.mock("next/router", () => ({
  useRouter: () => router,
}));

describe("Dashboard Job Page", () => {
  it("should render the job details", async () => {
    await appRender(<DashboardJobPage />);

    await waitforLoadingToFinish();

    const jobPosition = screen.getByRole("heading", {
      name: job.position,
    });

    const info = screen.getByText(job.info);

    expect(jobPosition).toBeInTheDocument();
    expect(info).toBeInTheDocument();
  });
});
