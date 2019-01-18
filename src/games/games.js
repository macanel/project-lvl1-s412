#!/usr/bin/env node

import greeting, { userName } from '..';

export default () => {
  greeting();
  userName();
};
