import DashboardCreateJobPage from "@/pages/dashboard/jobs/create";

import { appRender, screen, userEvent, waitFor } from "@/testing/test-utils";

const router = {
  push: jest.fn(),
};

jest.mock("next/router", () => ({
  useRouter: () => router,
}));

const jobData = {
  position: "Software Engineer",
  location: "London",
  deparment: "Engineering",
  info: "This is a test job",
};

describe("Dashboard Create Job Page", () => {
  it("should create a new job", async () => {
    appRender(<DashboardCreateJobPage />);

    const positionInput = screen.getByRole("textbox", {
      name: /position/i,
    });

    const locationInput = screen.getByRole("textbox", {
      name: /location/i,
    });

    const departmentInput = screen.getByRole("textbox", {
      name: /department/i,
    });

    const infoInput = screen.getByRole("textbox", {
      name: /info/i,
    });

    const submitBtn = screen.getByRole("button", {
      name: /create/i,
    });

    userEvent.type(positionInput, jobData.position);
    userEvent.type(locationInput, jobData.location);
    userEvent.type(departmentInput, jobData.deparment);
    userEvent.type(infoInput, jobData.info);

    userEvent.click(submitBtn);

    await waitFor(() => {
      expect(screen.getByText(/successfully/i)).toBeInTheDocument();
    });
  });
});
