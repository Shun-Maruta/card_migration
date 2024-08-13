const ImageUploader = ({images,setImages}) => {
    const handleFileChange = (event) => {
        const files = Array.from(event.target.files);

        // ファイルリーダーを使用して各画像を読み込む
        const newImages = files
            .filter(file => file.type === 'image/jpeg')
            .map(file => ({
                file: file,
                url: URL.createObjectURL(file)
            }));

        setImages(newImages);
    };

    return (
        <div>
            <input
                type="file"
                accept="image/jpeg"
                multiple
                webkitdirectory="true"
                onChange={handleFileChange}
            />
            <div>
                {images.map((image, index) => (
                    <img
                        key={index}
                        src={image.url}
                        alt={`preview ${index}`}
                        style={{ width: '100px', height: '100px', margin: '10px' }}
                    />
                ))}
            </div>
            {/* {images.length > 0 && images[1].file} */}
        </div>
    );
};

export default ImageUploader;
