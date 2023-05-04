import LoginPage from "@/pages/auth/login";

import { appRender, screen, fireEvent, userEvent, waitFor } from "@/testing/test-utils";

const router = {
  replace: jest.fn(),
  query: {},
};

jest.mock("next/router", () => ({
  useRouter: () => router,
}));

describe("Login Page", () => {
  it("should login the user into the dashboard", async () => {
    await appRender(<LoginPage />);

    const emailInput = screen.getByRole("textbox", { name: /email/i });
    const passwordInput = screen.getByLabelText(/password/i);
    const submitBtn = screen.getByRole("button", { name: /log in/i });

    const credentials = {
      email: "user1@test.com",
      password: "password",
    };

    fireEvent.change(emailInput, { target: { value: credentials.email } });
    fireEvent.change(passwordInput, { target: { value: credentials.password } });

    userEvent.click(submitBtn);

    await waitFor(() => {
      expect(router.replace).toHaveBeenCalledWith("/dashboard/jobs");
    });
  });
});
