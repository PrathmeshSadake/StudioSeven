"use client";

import { useStoreModal } from "@/hooks/use-store-modal";
import { Modal } from "@/components/ui/modal";

export const StoreModal = () => {
  const storeModal = useStoreModal();
  return (
    <Modal
      title='Create store'
      description='Add a new store to manage products and categories.'
      isOpen={storeModal.isOpen}
      onClose={storeModal.onClose}
    >
      <div>
        <div className='space-y-4 py-2 pb-4'>
          <div className='space-y-2'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione
            aliquid nisi mollitia animi corrupti, rerum unde veritatis
            perferendis maiores, iure architecto obcaecati nemo ut, dolores sed
            voluptates similique velit. Quis esse, ea officiis itaque sed nam
            quaerat iure nostrum necessitatibus consequatur magni reiciendis!
            Beatae accusantium voluptatibus voluptate? Ratione, eius qui!
          </div>
        </div>
      </div>
    </Modal>
  );
};
