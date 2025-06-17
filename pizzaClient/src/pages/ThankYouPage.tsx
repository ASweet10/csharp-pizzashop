import { useNavigate } from "react-router-dom";

function ThankYouPage() {
    const navigate = useNavigate()

    return (
        <div className="p-6 text-center">
        <h1 className="text-3xl font-bold mb-4">Thank you for your order!</h1>
        <p>Your food is being prepared. You’ll receive a confirmation email shortly.</p>
        <button
            onClick={() => navigate("/")}
            className="mt-6 bg-blue-600 text-white px-4 py-2 rounded"
        >
            Back to Menu
        </button>
        </div>
    );
}

export default ThankYouPage;
