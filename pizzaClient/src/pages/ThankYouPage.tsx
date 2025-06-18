import { useNavigate } from "react-router-dom";

function ThankYouPage() {
    const navigate = useNavigate()

    return (
        <div className="flex flex-col text-center bg-gray-600 text-white h-[100vh] items-center justify-center pb-20">
            <h1 className="text-3xl font-bold mb-4">Thank you for your order!</h1>
            <p>Your food is being prepared. You’ll receive a confirmation email shortly.</p>
            <button
                onClick={() => navigate("/")}
                className="mt-6 bg-blue-600 text-white px-4 py-2 rounded cursor-pointer"
            >
                Back to Menu
            </button>
        </div>
    );
}

export default ThankYouPage;
