import { useForm } from "@refinedev/react-hook-form";

const BookCreate: React.FC = () => {
    const {
        refineCore: { onFinish, formLoading },
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    return (
        <form onSubmit={handleSubmit(onFinish)}>
            <label>Title: </label>
            <input {...register("title", { required: true })} />
            {errors.title && <span>This field is required</span>}
            <br />
            <label>Description: </label>
            <br/>
            <textarea
                {...register("description", { required: true })}
                rows={10}
                cols={50}
            />
            <br />
            <label>Story: </label>
            <br />
            <textarea
                {...register("story", { required: true })}
                rows={10}
                cols={50}
            />
            {errors.content && <span>This field is required</span>}
            <br />
            <br />
            <input type="submit" disabled={formLoading} value="Submit" />
            {formLoading && <p>Loading</p>}
        </form>
    );
};

export default BookCreate