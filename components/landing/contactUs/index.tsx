import { Title } from "../../common/title";
import { useForm } from "react-hook-form";
import { Input } from "../../common/input";
import { Box, Button } from "@chakra-ui/react";
import { WhastappButton } from "../../common/whatsappButton";
export const ContactUs = () => {
  const {
    handleSubmit,
    register,
    formState: { errors, isSubmitting },
  } = useForm();

  const onSubmit = (values: any) => {
    console.log(values);
  };

  return (
    <Box mb="40px" mt="30px" bg="white" borderRadius="10px" padding="10px">
      <Title noMt>CONTACTANOS</Title>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Input
          id="name"
          label="Nombre"
          placeholder="Nombre Apellido"
          register={register}
          errors={errors}
        />
        <Input
          id="email"
          label="Email"
          placeholder="test@ejemplo.com"
          register={register}
          errors={errors}
        />
        <Input
          id="phone"
          label="Telefono"
          placeholder="+54 2262 5555555"
          register={register}
          errors={errors}
        />
        <Input
          textArea
          id="help"
          label="¿En qué podemos ayudarte?"
          placeholder="Escribe aqui tu consulta"
          register={register}
          errors={errors}
        />
        <Button width={{ base: "100%" }} mt={{ base: "20px" }}>
          Enviar
        </Button>
      </form>
      <WhastappButton />
    </Box>
  );
};
