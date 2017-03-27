namespace Model.ViewModel
{
    public class HeroCommand
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public string Email { get; set; }
    }

    public class LoginCommand
    {
        public string Password { get; set; }
        public string Email { get; set; }
    }
}
