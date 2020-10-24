import { renderHook, act } from '@testing-library/react-hooks';
import { Lookup } from 'common/models';
import { useConfirmationDialog } from './confirmation-dialog.hook';

describe('confirmation-dialog hook specs', () => {
  describe('hook tests', () => {
    it('When onOpendialog is called, isOpen shoulbe true', () => {
      // Arrange
      const item: Lookup = {
        id: '1',
        name: 'test',
      };

      const props = renderHook(() => useConfirmationDialog());

      // Act
      act(() => {
        props.result.current.onOpenDialog(item);
      });

      // Assert
      expect(props.result.current.isOpen).toBe(true);
    });

    it('When onClose is called, isOpen shoulb be false', () => {
      // Arrange
      const props = renderHook(() => useConfirmationDialog());

      // Act

      act(() => {
        props.result.current.onClose();
      });

      // Assert
      expect(props.result.current.isOpen).toBe(false);
    });

    it('When  onOpenDialog is called, result is empty', () => {
      // Arrange
      const item: Lookup = {
        id: '1',
        name: 'test',
      };

      const itemComporate: Lookup = {
        id: '',
        name: '',
      };

      const { result } = renderHook(() => useConfirmationDialog());

      // Act

      act(() => {
        result.current.onOpenDialog(item);
        result.current.onAccept();
      });

      // Assert
      expect(result.current.itemToDelete).toEqual(itemComporate);
    });

    it('When onClose is called, result is some value', () => {
      // Arrange
      const item: Lookup = {
        id: '1',
        name: 'test',
      };

      const { result } = renderHook(() => useConfirmationDialog());

      // Act
      act(() => {
        result.current.onOpenDialog(item);
        result.current.onClose();
      });

      // Assert
      expect(result.current.itemToDelete).toEqual(item);
    });
  });
});
