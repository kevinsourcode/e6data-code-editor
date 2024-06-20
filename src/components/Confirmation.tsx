import React from 'react';
import {
  Text,
  Button,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
} from '@chakra-ui/react';
import { toast } from 'sonner';

interface ConfirmationProps {
  onClose: () => void;
  isOpen: boolean;
  setIsLoading: (arg0: boolean) => void;
}

const Confirmation: React.FC<ConfirmationProps> = ({
  isOpen,
  onClose,
  setIsLoading,
}) => {
  const handleSuccess = () => {
    onClose();
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      toast.success('Program submitted successfully!');
    }, 2000);
  };
  return (
    <Modal
      closeOnOverlayClick={false}
      isCentered
      isOpen={isOpen}
      onClose={onClose}
    >
      <ModalOverlay backdropFilter="blur(10px)" />
      <ModalContent>
        <ModalHeader></ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <Text fontWeight="bold">Do you want to submit?</Text>
        </ModalBody>

        <ModalFooter>
          <Button colorScheme="blue" mr={3} onClick={handleSuccess}>
            Yes, I'm ready!
          </Button>
          <Button variant="ghost" onClick={onClose}>
            No, go back.
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default Confirmation;
