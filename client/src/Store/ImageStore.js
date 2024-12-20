import {create} from 'zustand'
import axios from 'axios'

const ImageStore = create((set, get) => ({
    data: [],
    isLoading: false,
    error: null,

    uploadData: async (formData) => {
        set({ isLoading: true, error: null });
        try {
            const response = await axios.post('http://localhost:9000/upload', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
            });
            const result = response.data;
            console.log('Upload successful:', result);
            set({ data: result, isLoading: false });
        } catch (err) {
            console.error('Upload failed:', err);
            set({ error: err.response?.data?.message || err.message, isLoading: false });
        }
    },
    

    fetchData: async () => {
        set({ isLoading: true, error: null });
        try {
            const response = await axios.get('http://localhost:9000/fetch_image'); 
            const result = response.data;
            console.log(result, "result test");
            set({ data: result, isLoading: false });
        } catch (err) {
            console.error(err);
            set({ error: err.message, isLoading: false });
        }
    },
}));


export default ImageStore;