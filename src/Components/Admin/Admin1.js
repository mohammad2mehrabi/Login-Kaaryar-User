import { useUserContext } from '../UserContext/UserContext';

const DashboardPage = () => {
  const { profile } = useUserContext();

  return (
    <div>
      <img style={{width:"100%"}} src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSP_uoiis6txmxRX1Z-G_kauz4oSCEzI-A7oj_Deg4y0n3C3htOlSNv8F3Pp0n8peZG2Eg&usqp=CAU'/>
      <div>

        {profile && (
          <>
            <p style={{color:"black" , textAlign:"center"}}> {profile.username}</p>
            <p style={{color:"black" ,  textAlign:"center"}}>{profile.email}</p>
            {profile.roles && (
              <>
                <ul>
                  {profile.roles.map((role, index) => (
                    <li key={index}>{role}</li>
                  ))}
                </ul>
              </>
            )}
          </>
        )}
      </div>
    </div>
  );
};

export default DashboardPage;