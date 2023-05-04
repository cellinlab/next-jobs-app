import type { ReactElement } from 'react';
import {
  render,
  screen,
  waitFor,
  within,
  fireEvent,
} from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import { AppProvider } from '@/providers/app';
import type { Entity } from '@/types';

export const appRender = (ui: ReactElement) => {
  return render(ui, {
    wrapper: AppProvider,
  });
};

export const checkTableValues = <T extends Entity>({
  container,
  data,
  columns,
}: {
  container?: HTMLElement;
  data: T[];
  columns: Array<keyof T>;
}) => {
  data.forEach((entry, index) => {
    const selector = container
      ? within(container)
      : screen;
    const row = selector.getByTestId(`table-row-${index}`);

    columns.forEach((column) => {
      const cell = within(row).getByRole('cell', {
        name: String(entry[column]),
      });

      expect(cell).toBeInTheDocument();
    });
  });
};

export const waitforLoadingToFinish = () => {
  return waitFor(
    () => {
      const loaders = [
        ...screen.queryAllByTestId(/loading/i),
        ...screen.queryAllByText(/loading/i),
      ];

      loaders.forEach((loader) => {
        expect(loader).not.toBeInTheDocument();
      });
    },
    {
      timeout: 5000,
    }
  );
};

export * from '@testing-library/react';
export { userEvent, fireEvent };