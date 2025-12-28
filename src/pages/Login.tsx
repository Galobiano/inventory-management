import { useState } from "react";
import { useNavigate } from "react-router-dom";
import logo from "@/assets/inventory.jpg";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Mail, Lock, EyeClosed, EyeOff } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { toast } from "react-toastify";

// auth
import { useAuth } from "@/context/AuthContext";

const loginField = [
  {
    name: "email",
    type: "text",
    placeholder: "email",
    icon: Mail,
    isPassword: false,
  },
  {
    name: "password",
    type: "password",
    placeholder: "password",
    icon: Lock,
    isPassword: true,
  },
];

const Login = () => {
  const navigate = useNavigate();
  const { login, isLoading } = useAuth();
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleLogin = async () => {
    if (!formData.username || !formData.password) {
      toast.error("Username and password are required");
      return;
    }

    try {
      await login({
        username: formData.username,
        password: formData.password,
      });

      toast.success("Login successful");
      navigate("/dashboard");
    } catch (error) {
      toast.error("Invalid username or password");
    }
  };
  return (
    <main
      className="min-h-screen"
      style={{
        backgroundImage: `url(${logo})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <section className="min-h-screen flex justify-center p-2 items-center">
        <Card className="bg-white/80 w-full max-w-3xl  md:p-10 md:pt-15 md:h-90 ">
          <CardHeader>
            <CardTitle className="font-bold text-center text-2xl">
              LOGIN
            </CardTitle>
          </CardHeader>

          <CardContent>
            {loginField.map((field, index) => {
              const Icon = field.icon;
              const isPass = field.isPassword;
              return (
                <form key={index} className="relative space-y-4">
                  <Input
                    key={
                      isPass ? (showPassword ? "text" : "password") : field.type
                    }
                    name={field.name}
                    type={
                      isPass ? (showPassword ? "text" : "password") : field.type
                    }
                    placeholder={field.placeholder}
                    value={formData[field.name as "username" | "password"]}
                    onChange={handleChange}
                    className="pl-10"
                  />
                  <Icon className="absolute top-2 left-3 size-5 " />

                  {isPass && (
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-5 top-1"
                    >
                      {showPassword ? <EyeOff /> : <EyeClosed />}
                    </button>
                  )}
                </form>
              );
            })}
          </CardContent>
          <div className="flex justify-center mx-7">
            <Button
              className="w-full py-5 rounded-full bg-primary text-lg text-white font-bold"
              onClick={handleLogin}
              disabled={isLoading}
            >
              {isLoading ? "Logging in..." : "LOGIN"}
            </Button>
          </div>
        </Card>
      </section>
    </main>
  );
};

export default Login;
