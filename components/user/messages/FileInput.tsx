import { Dialog, DialogClose, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import Image from "next/image";
import uploadImg from "@/public/cloud-computing_892311.png";
import { File } from "lucide-react";

interface FileInputProps {
    setFileData: (url: string, FileType: string) => void;
    buttonRef: React.RefObject<HTMLButtonElement>;
};

const FileInput = ({ setFileData, buttonRef }: FileInputProps) => {
    const handleChange = (event: any) => {
        const file: File = event.target.files[0];
        setFileData(URL.createObjectURL(file), file.type);
    };

    return (
        <Dialog>
            <DialogTrigger className="hover:bg-accent p-2 rounded-full"><File /></DialogTrigger>
            <DialogContent className="p-4">

                <div className="w-full h-full border border-dashed rounded-md p-1">
                    <Label htmlFor="fileUpload" className="h-full w-full gap-2 flex flex-col items-center justify-center">
                        <Image src={uploadImg} alt={"Upload Image"} width={150} />
                        <span className="text-xl ">Upload A File</span>
                    </Label>
                    <input onChange={handleChange} id="fileUpload" type="file" className="w-0 h-0 hover:cursor-pointer" />
                </div>
            </DialogContent>
            <DialogClose ref={buttonRef} className="hidden"></DialogClose>
        </Dialog>
    );
};
export default FileInput;