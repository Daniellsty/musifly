import {create} from 'zustand';

interface UserUploadStore { 
    isOpen :boolean;
    onOpen:()=> void;
    onClose:()=> void;
}

const useUploadModal = create<UserUploadStore>((set)=>({
    isOpen:false,
    onOpen:()=> set({isOpen:true}),
    onClose:()=> set({isOpen:false}),
}))

export default useUploadModal;