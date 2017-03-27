using System.Security.Cryptography;
using System.Text;

namespace Common
{
    public class EncryptPasswordProvider
    {
        public static string EncryptPassword(string password)
        {
            MD5 md5 = new MD5CryptoServiceProvider();
            md5.ComputeHash(ASCIIEncoding.ASCII.GetBytes(password));
            byte[] result = md5.Hash;
            StringBuilder strBuilder = new StringBuilder();
            for (int i = 0; i < result.Length; i++)
            {
                strBuilder.Append(i.ToString("x2"));
            }

            return strBuilder.ToString();
        }
    }
}
