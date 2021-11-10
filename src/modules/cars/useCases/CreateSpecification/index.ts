import {
  InMemorySpecificationsRepository
} from "../../repositories/implementations/InMemorySpecificationsRepository";

import { CreateSpecificationUseCase } from "./CreateSpecificationUseCase";
import { CreateSpecificationController } from "./CreateSpecificationController";

const specificationsRepository = InMemorySpecificationsRepository.getInstance()

const createSpecificationUseCase = new CreateSpecificationUseCase(specificationsRepository)

export const createSpecificationController = new CreateSpecificationController(
  createSpecificationUseCase
)
