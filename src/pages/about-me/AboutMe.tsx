import { useEffect, useState } from 'react';
import BreadScrum from "../../components/bread-scrum/BreadScrum";
import AboutMe from '../../views/about/Aboutme';
import FunFacts from '../../views/skills/FunFacts';
import { SkillCardProps } from '../../views/skills/Skill';
import SkillHorizontal from '../../views/skills/SkillHor';
import { skillDb } from '../../@core/db/skills';
import { useTranslation } from 'react-i18next';

const AboutPage = () => {
    const { t } = useTranslation();
    const [skills, setSkill] = useState<SkillCardProps[]>([]);
    useEffect(() => {
        const list: SkillCardProps[] = Object.values(skillDb).flat(1);
        setSkill(list);
    }, []);


    return (
        <>
            <BreadScrum path={t("about-me")} desc={t('who_am_i')} />
            <AboutMe hideMore={true} hideTitle={true} />
            <SkillHorizontal skills={skills} />
            <FunFacts />
        </>
    );
}
export default AboutPage;