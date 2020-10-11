import { mapProjectFromApiToVm } from './project.mapper';
import * as apiModel from './api/project.api-model';
import * as viewModel from './project.vm';

describe('project.mappers specs', () => {
  describe('Mapping tests', () => {
    it('the parameter is null, should return a empty viewModel.Project ', () => {
      // Arrange
      const projectTest: apiModel.Project = null;
      const expected: viewModel.Project = viewModel.createEmptyProject();

      // Act
      let res = mapProjectFromApiToVm(projectTest);
      // Assert
      expect(res).toEqual(expected);
    });

    it('the parameter is undefined, should return a empty viewModel.Project ', () => {
      // Arrange
      const projectTest: apiModel.Project = undefined;
      const expected: viewModel.Project = viewModel.createEmptyProject();

      // Act
      let res = mapProjectFromApiToVm(projectTest);
      // Assert
      expect(res).toEqual(expected);
    });

    it('the parameter is empty apiModel.Proyect, should return a empty viewModel.Project ', () => {
      // Arrange
      const projectTest: apiModel.Project = {
        id: '',
        name: '',
        externalId: '',
        comments: '',
        isActive: false,
        employees: [],
      };
      const expected: viewModel.Project = viewModel.createEmptyProject();

      // Act
      let res = mapProjectFromApiToVm(projectTest);
      // Assert
      expect(res).toEqual(expected);
    });

    it('the parameter is a apiModel.Proyect without employees, should return a valid viewModel.Project ', () => {
      // Arrange
      const projectTest: apiModel.Project = {
        id: 'id1',
        name: 'name test',
        externalId: 'externalID1test',
        comments: 'comment',
        isActive: false,
        employees: [],
      };
      const expected: viewModel.Project = {
        id: 'id1',
        name: 'name test',
        externalId: 'externalID1test',
        comments: 'comment',
        isActive: false,
        employees: [],
      };

      // Act
      let res = mapProjectFromApiToVm(projectTest);
      // Assert
      expect(res).toEqual(expected);
    });

    it('the parameter is a apiModel.Proyect with one employee, should return a valid viewModel.Project ', () => {
      // Arrange
      const projectTest: apiModel.Project = {
        id: 'id1',
        name: 'name test',
        externalId: 'externalID1test',
        comments: 'comment',
        isActive: false,
        employees: [
          {
            id: 'employee1',
            isAssigned: true,
            employeeName: 'employeeNameTest',
          },
        ],
      };
      const expected: viewModel.Project = {
        id: 'id1',
        name: 'name test',
        externalId: 'externalID1test',
        comments: 'comment',
        isActive: false,
        employees: [
          {
            id: 'employee1',
            isAssigned: true,
            employeeName: 'employeeNameTest',
          },
        ],
      };

      // Act
      let res = mapProjectFromApiToVm(projectTest);
      // Assert
      expect(res).toEqual(expected);
    });

    it('the parameter is a apiModel.Proyect with more than one employee, should return a valid viewModel.Project ', () => {
      // Arrange
      const projectTest: apiModel.Project = {
        id: 'id1',
        name: 'name test',
        externalId: 'externalID1test',
        comments: 'comment',
        isActive: false,
        employees: [
          {
            id: 'employee1',
            isAssigned: true,
            employeeName: 'employeeNameTest',
          },
          {
            id: 'employee2',
            isAssigned: false,
            employeeName: 'employeeNameTest2',
          },
        ],
      };
      const expected: viewModel.Project = {
        id: 'id1',
        name: 'name test',
        externalId: 'externalID1test',
        comments: 'comment',
        isActive: false,
        employees: [
          {
            id: 'employee1',
            isAssigned: true,
            employeeName: 'employeeNameTest',
          },
          {
            id: 'employee2',
            isAssigned: false,
            employeeName: 'employeeNameTest2',
          },
        ],
      };

      // Act
      let res = mapProjectFromApiToVm(projectTest);
      // Assert
      expect(res).toEqual(expected);
    });
  });
});
