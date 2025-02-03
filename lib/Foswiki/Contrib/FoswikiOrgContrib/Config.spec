# ---+ Extensions
# ---++ NatSkin
# ---+++ NatSkin Themes
# **PERL LABEL="FoswikiOrg"**
$Foswiki::cfg{NatSkin}{Themes}{FoswikiOrg} = {
  baseUrl => '%PUBURLPATH%/%SYSTEMWEB%/FoswikiOrgContrib/build',
  logoUrl => '%PUBURLPATH%/%SYSTEMWEB%/FoswikiOrgContrib/assets/logo.svg',
  baseStyle => 'matter',
  styles => {
    foswikiorg => 'styles.css',
  },
  variations => {
    frontpage => 'frontpage.css'
  }
};

1;
