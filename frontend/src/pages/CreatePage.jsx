import { useState } from "react";
import {
  Box,
  Button,
  Container,
  Heading,
  Input,
  useColorModeValue,
  useToast,
  VStack,
} from "@chakra-ui/react";
import { useProductStore } from "../store/product";

const CreatePage = () => {
  const [newProduct, setNewProduct] = useState({
    name: "",
    price: "",
    image: "",
  });
  const { createProduct } = useProductStore();
  const toast = useToast();
  const handleAddProduct = async () => {
    const { success, message } = await createProduct(newProduct);
    if (success) {
      setNewProduct({
        name: "",
        price: "",
        image: "",
      });
      toast({
        title: "Success",
        description: message,
        status: "success",
        isClosable: true,
      });
    } else {
      toast({
        title: "Error",
        description: message,
        status: "error",
        isClosable: true,
      });
    }
  };
  return (
    <>
      <Container maxW={"container.sm"} marginTop={10}>
        <VStack spacing={8}>
          <Heading
            as={"h1"}
            size={"2xl"}
            textAlign={"center"}
            mb={8}
            color={"blue.400"}
          >
            Create New Product
          </Heading>
          <Box
            w={"full"}
            bg={useColorModeValue("white", "gray.800")}
            p={6}
            rounded={"lg"}
            shadow={"md"}
          >
            <VStack spacing={4}>
              <Input
                placeholder="Product Name"
                name="name"
                value={newProduct.name}
                onChange={(e) =>
                  setNewProduct({ ...newProduct, name: e.target.value })
                }
              />
              <Input
                placeholder="Price"
                name="price"
                type="number"
                value={newProduct.price}
                onChange={(e) =>
                  setNewProduct({ ...newProduct, price: e.target.value })
                }
              />
              <Input
                placeholder="Image Url"
                name="image"
                value={newProduct.image}
                onChange={(e) =>
                  setNewProduct({ ...newProduct, image: e.target.value })
                }
              />
              <Button colorScheme="blue" onClick={handleAddProduct} w={"full"}>
                Add
              </Button>
            </VStack>
          </Box>
        </VStack>
      </Container>
    </>
  );
};

export default CreatePage;
