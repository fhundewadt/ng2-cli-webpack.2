/* tslint:disable:no-unused-variable */

import { By }           from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { addProviders, async, inject } from '@angular/core/testing';
import { CmpntComponent } from './cmpnt.component';

describe('Component: Cmpnt', () => {
  it('should create an instance', () => {
    let component = new CmpntComponent();
    expect(component).toBeTruthy();
  });
});
