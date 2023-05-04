import DashboardCreateJobPage from "@/pages/dashboard/jobs/create";

import { appRender, screen, userEvent, fireEvent, waitFor } from "@/testing/test-utils";

const router = {
  push: jest.fn(),
};

jest.mock("next/router", () => ({
  useRouter: () => router,
}));

const jobData = {
  position: "Software Engineer",
  location: "London",
  department: "Engineering",
  info: "Lorem Ipsum",
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

    const submitButton = screen.getByRole("button", {
      name: /create/i,
    });

    fireEvent.change(positionInput, {
      target: {
        value: jobData.position,
      },
    });
    fireEvent.change(locationInput, {
      target: {
        value: jobData.location,
      },
    });
    fireEvent.change(departmentInput, {
      target: {
        value: jobData.department,
      },
    });
    fireEvent.change(infoInput, {
      target: {
        value: jobData.info,
      },
    });

    await waitFor(() => {
      // 检查输入
      expect(positionInput).toHaveValue(jobData.position);
      expect(departmentInput).toHaveValue(jobData.department);
      expect(locationInput).toHaveValue(jobData.location);
      expect(infoInput).toHaveValue(jobData.info);

      userEvent.click(submitButton);

      expect(router.push).toHaveBeenCalledWith("/dashboard/jobs");
    });
  });
});
