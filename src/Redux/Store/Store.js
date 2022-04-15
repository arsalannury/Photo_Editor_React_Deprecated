import { configureStore } from "@reduxjs/toolkit";
import reducer from '../Combines/Main';

export const store = configureStore({reducer})