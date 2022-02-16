#!/usr/bin/env node
import * as cdk from 'aws-cdk-lib';
import { LambdaTutorialStack } from '../lib/lambda-tutorial-stack';

const app = new cdk.App();
new LambdaTutorialStack(app, 'LambdaTutorialStack');
