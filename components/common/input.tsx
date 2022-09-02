import {
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input as ChakraInput,
  Textarea,
} from "@chakra-ui/react";
import { UseFormRegister, FieldValues, FieldErrorsImpl } from "react-hook-form";

interface InputProps {
  id: string;
  label: string;
  placeholder: string;
  register: UseFormRegister<FieldValues>;
  requiredMessage?: string;
  errors: {
    [x: string]: any;
  };
  textArea?: boolean;
}

export const Input = ({
  id,
  label,
  placeholder,
  register,
  requiredMessage = "Requerido.",
  errors,
  textArea = false,
}: InputProps) => {
  return (
    <FormControl>
      <FormLabel htmlFor={id}>{label}</FormLabel>
      {!textArea ? (
        <ChakraInput
          id={label}
          placeholder={placeholder}
          {...register(id, {
            required: requiredMessage,
          })}
        />
      ) : (
        <Textarea
          id={label}
          placeholder={placeholder}
          {...register(id, {
            required: requiredMessage,
          })}
        />
      )}
      <FormErrorMessage>{errors[id] && errors[id]?.message}</FormErrorMessage>
    </FormControl>
  );
};
