import React from 'react';
import { render, screen } from '@testing-library/react';
import { ConfirmationDialogComponent } from './confirmation-dialog.component';
import userEvent from '@testing-library/user-event';

describe('confirmation-dialog component specs', () => {
  describe('component tests', () => {
    it('should display a dialog with tittle and content and click accpet', () => {
      // Arrange
      const props = {
        isOpen: true,
        onAccept: jest.fn(),
        onClose: jest.fn(),
        title: 'test title',
        labels: {
          closeButton: 'test close',
          acceptButton: 'test accept',
        },
        children: null,
      };
      // Act
      render(<ConfirmationDialogComponent {...props} />);

      const buttonElement = screen.getByRole('button', { name: 'test accept' });
      userEvent.click(buttonElement);

      // Assert
      expect(props.onAccept).toHaveBeenCalled();
    });

    it('should display a dialog with tittle and content and click close', () => {
      // Arrange
      const props = {
        isOpen: true,
        onAccept: jest.fn(),
        onClose: jest.fn(),
        title: 'test title',
        labels: {
          closeButton: 'test close',
          acceptButton: 'test accept',
        },
        children: null,
      };
      // Act
      render(<ConfirmationDialogComponent {...props} />);

      const buttonElement = screen.getByRole('button', { name: 'test close' });
      userEvent.click(buttonElement);

      // Assert
      expect(props.onClose).toHaveBeenCalled();
    });
    it('should display a dialog with title and content, heading title ', () => {
      // Arrange
      const props = {
        isOpen: true,
        onAccept: jest.fn(),
        onClose: jest.fn(),
        title: 'test title',
        labels: {
          closeButton: 'test close',
          acceptButton: 'test accept',
        },
        children: null,
      };
      // Act
      render(<ConfirmationDialogComponent {...props} />);

      const title = screen.getByRole('heading', { name: 'test title' });

      // Assert
      expect(title).toBeInTheDocument();
    });

    it('should display a dialog with title and content, children test ', () => {
      // Arrange
      const props = {
        isOpen: true,
        onAccept: jest.fn(),
        onClose: jest.fn(),
        title: 'test title',
        labels: {
          closeButton: 'test close',
          acceptButton: 'test accept',
        },
        children: <label>Children test</label>,
      };
      // Act
      render(<ConfirmationDialogComponent {...props} />);

      const children = screen.getAllByText('Children test');

      // Assert
      expect(children).not.toBeUndefined();
      expect(children).not.toBeNull();
      expect(children.length).toBeGreaterThan(0);
      expect(children[0]).toContainHTML('<label>Children test</label>');
    });
  });
});
