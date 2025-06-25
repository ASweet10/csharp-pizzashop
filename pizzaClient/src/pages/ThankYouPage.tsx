import { useNavigate } from "react-router-dom";

function ThankYouPage() {
    const navigate = useNavigate()

    return (
        <div className="flex justify-center h-[100vh] bg-cover" style={{ backgroundImage: "url('./charcoal.jpg')" }}>
            <div className="flex flex-col text-white items-center justify-center text-center">
                <h1 className="text-6xl font-bold font-heading mb-4">Thank you for your order!</h1>
                <p className="text-xl">Your food is being prepared. You’ll receive a confirmation email shortly.</p>
                <button
                    onClick={() => navigate("/")}
                    className="mt-6 bg-blue-600 text-white text-xl px-4 py-2 rounded cursor-pointer"
                >
                    Back to Menu
                </button>
            </div>
        </div>
    );
}

export default ThankYouPage;
