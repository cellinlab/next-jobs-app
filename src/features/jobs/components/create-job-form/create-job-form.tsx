import { Box, Stack } from "@chakra-ui/react";
import { useForm } from "react-hook-form";

import { Button } from "@/components/button";
import { InputField } from "@/components/form";

import { useCreateJob } from "../../api/create-job";
import type { CreateJobData } from "../../types";

export type CreateJobFormProps = {
  onSuccess: () => void;
};

export const CreateJobForm = ({ onSuccess }: CreateJobFormProps) => {
  const createJob = useCreateJob({
    onSuccess,
  });

  const { register, handleSubmit, formState } = useForm<CreateJobData>();

  const onSubmit = (data: CreateJobData) => {
    createJob.submit({ data });
  };

  return (
    <Box w="full">
      <Stack as="form" w="full" onSubmit={handleSubmit(onSubmit)} spacing="8">
        <InputField
          label="Position"
          {...register("position", {
            required: "Position is required",
          })}
          error={formState.errors["position"]}
        />
        <InputField
          label="Department"
          {...register("department", {
            required: "Department is required",
          })}
          error={formState.errors["department"]}
        />
        <InputField
          label="Location"
          {...register("location", {
            required: "Location is required",
          })}
          error={formState.errors["location"]}
        />
        <InputField
          label="Info"
          type="textarea"
          {...register("info", {
            required: "Info is required",
          })}
          error={formState.errors["info"]}
        />
        <Button isDisabled={createJob.isLoading} isLoading={createJob.isLoading} type="submit">
          Create
        </Button>
      </Stack>
    </Box>
  );
};
