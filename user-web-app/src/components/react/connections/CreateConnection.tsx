import { Button, Input } from "mee-components/react-components";
import { useNavigate } from "react-router-dom";
export default function CreateConnection() {
  let navigate = useNavigate();
  const goToConnections = (e: React.MouseEvent) => {
    e.preventDefault();
    navigate("/");
  };
  return (
    <main className="flex h-full min-h-screen p-6" id="main">
      <article className="flex h-full w-full flex-1 flex-col items-center justify-start">
        <div className="flex w-full max-w-192 flex-col items-start justify-center gap-4">
          <a
            className="text-base font-semibold leading-6 text-brand-700"
            href="/connections"
            onClick={goToConnections}
          >
            <span className="mr-2">&larr;</span>Back to connections
          </a>
          <section className="w-full flex-col items-start gap-6 rounded-xl border border-solid border-gray-300 bg-white p-8 text-gray-800">
            <div className="flex w-full flex-col gap-6">
              <div className="flex flex-col gap-2">
                <div className="text-3xl font-semibold leading-10">
                  New connection
                </div>
              </div>

              <form
                className="mx-auto flex w-full flex-col items-center gap-6"
                id="create-connection"
                autoComplete="off"
              >
                <Input
                  className="w-full"
                  id="name"
                  type="text"
                  label="Name"
                  size="lg"
                  labelPosition="inside"
                  autocomplete="off"
                  required
                />
                <Input
                  className="w-full"
                  id="url"
                  type="text"
                  label="Image Url"
                  size="lg"
                  labelPosition="inside"
                  autocomplete="off"
                  required
                />
                <div className="self-end">
                  <Button
                    id="save-connection"
                    type="button"
                    className="w-auto px-4"
                    onClick={goToConnections}
                  >
                    Save
                  </Button>
                </div>
              </form>
            </div>
          </section>
        </div>
      </article>
    </main>
  );
}
