import "reflect-metadata";
import { Container } from "typedi";
import { Loader } from "./loaders";

const Loaders = Container.get<Loader>(Loader);

Loaders.start();
