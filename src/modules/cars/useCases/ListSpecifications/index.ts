import {
  InMemorySpecificationsRepository
} from '../../repositories/implementations/InMemorySpecificationsRepository';

import { ListSpecificationsController } from "./ListSpecificationsController";
import { ListSpecificationsUseCase } from "./ListSpecificationsUseCase";

const specificationsRepository = InMemorySpecificationsRepository.getInstance()

const listSpecificationsUseCase = new ListSpecificationsUseCase(specificationsRepository)

export const listSpecificationsController = new ListSpecificationsController(
  listSpecificationsUseCase
)
