import FtpServer from "ftp-srv";

interface CreateFtpServerOptionsProps {
    host: string;
    root: string;
}

function createFtpServer(options: CreateFtpServerOptionsProps): void {
    const ftpServer = new FtpServer({
        url: options.host,
        anonymous: true,
        greeting: "Bem vindo ao FTP Server",
    });

    ftpServer.on("login", (data, resolve) => {
        console.log("DATA");
        console.log(data);

        resolve({
            root: options.root,
        });
    });

    ftpServer.listen().then(() => {
        console.log("Rodando servidor FTP");
    });
}

export { createFtpServer };
