const projectRedirects = {
  hety: "/projects/nday-hety",
  radoko: "/projects/nday-radoko"
};

function ProjectRedirect() {
  const params = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    if (params.projectId && projectRedirects[params.projectId]) {
      window.location.href = `https://hety.nday.mg${projectRedirects[params.projectId]}`;
    } else {
      navigate("/404");
    }
  }, [params.projectId]);

  return <LoadingScreen />;
}