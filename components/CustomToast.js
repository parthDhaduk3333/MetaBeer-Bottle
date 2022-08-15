import Image from "next/image"
import toast from "react-hot-toast"

const customToast = (message,type="error") => {
    return toast.custom((t) => (
        <div className={` toast-backgorund bg-dark fadeInDown ${t.visible ? 'animate-enter' : 'animate-leave'} `} style={{ width: 400 }}>
            <div className="d-flex h-100 align-items-center">
                <div className="py-3 ps-2">
                    <Image
                        className="h-10 w-10 rounded-full"
                        src={`${type == 'success' ? '/images/favicon.ico' : '/images/error.png'}`}
                        height={50}
                        width={50}
                        alt="img"
                    />
                </div>
                <div className="mx-3">
                    <p className='fw-bold mb-1' 
                        style={{ fontSize: 14, color: `${type == 'success' ? '#83f300' : '#D93636'}` }}>MetaBeer Bottle</p>
                    {message}
                </div>

                <div className='h-100 ms-auto px-4 toast-close d-flex align-items-center' style={{ cursor: "pointer" }} onClick={() => toast.dismiss(t.id)}>
                    <h3 className="mb-0 rounded-3">&times;</h3>
                </div>
            </div>
        </div>
    ))
}

export default customToast