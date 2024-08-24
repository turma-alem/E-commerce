import HttpException from "../middleware/errors/HttpException"


export const cadastroService = async(user) => {
    try {
        await prisma.user.create({
            data: {
                nome,
                email,
                senha
            }
        })
    } catch (error) {
        throw new HttpException(400,'Usuário não castrado!')
    }

    return{
        success: true
    }
}